import { useState } from "react";
import { cn } from "@/lib/utils";
import { Upload, X, FileSpreadsheet, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface FileUploaderProps {
  onFileSelected?: (file: File) => void;
  onUploadStarted?: () => void;
  onUploadComplete?: (stocksHtml: string, sectorsHtml: string) => void;
  onUploadError?: (error: string) => void;
  className?: string;
}

const FileUploader = ({ 
  onFileSelected, 
  onUploadStarted,
  onUploadComplete,
  onUploadError,
  className 
}: FileUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const validateFile = (file: File): boolean => {
    const validTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.oasis.opendocument.spreadsheet",
      "text/csv",
      "application/csv",
    ];
    
    if (!validTypes.includes(file.type)) {
      setError("Please upload an Excel or CSV file (.xlsx, .xls, .ods, .csv)");
      return false;
    }
    
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      setError("File is too large. Maximum size is 10MB.");
      return false;
    }
    
    return true;
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    setError(null);
    
    if (e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (validateFile(droppedFile)) {
        setFile(droppedFile);
        if (onFileSelected) {
          onFileSelected(droppedFile);
        }
        toast({
          title: "File uploaded successfully",
          description: `${droppedFile.name} is ready for analysis.`,
        });
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
        if (onFileSelected) {
          onFileSelected(selectedFile);
        }
        toast({
          title: "File uploaded successfully",
          description: `${selectedFile.name} is ready for analysis.`,
        });
      }
    }
  };

  const removeFile = () => {
    setFile(null);
    setError(null);
  };

  return (
    <div className={cn("w-full", className)}>
      {!file ? (
        <>
          <div
            className={cn(
              "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
              isDragging 
                ? "border-finance-teal bg-finance-teal/10" 
                : "border-finance-gray/30 hover:border-finance-teal/50",
              "flex flex-col items-center justify-center"
            )}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleFileDrop}
            onClick={() => document.getElementById("file-input")?.click()}
          >
            <input
              id="file-input"
              type="file"
              accept=".xlsx,.xls,.ods,.csv"
              className="hidden"
              onChange={handleFileSelect}
            />
            <div className="mb-4 bg-finance-teal/10 p-4 rounded-full">
              <Upload 
                className="h-8 w-8 text-finance-teal" 
                strokeWidth={1.5}
              />
            </div>
            <p className="text-lg font-medium mb-1">
              Drag and drop your Excel or CSV file here
            </p>
            <p className="text-sm text-finance-gray mb-4">
              or click to browse (.xlsx, .xls, .ods, .csv)
            </p>
            <Button 
              variant="outline" 
              className="border-finance-gray/30 text-finance-gray hover:bg-finance-teal/10 hover:text-finance-teal hover:border-finance-teal"
            >
              Select File
            </Button>
          </div>
          {error && (
            <div className="mt-2 flex items-center text-destructive gap-2">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}
        </>
      ) : (
        <div className="border rounded-lg p-4 bg-finance-lightGray">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-md">
                <FileSpreadsheet className="h-6 w-6 text-finance-blue" />
              </div>
              <div>
                <p className="font-medium truncate">{file.name}</p>
                <p className="text-xs text-finance-gray">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={removeFile}
              className="text-finance-gray hover:text-destructive"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;