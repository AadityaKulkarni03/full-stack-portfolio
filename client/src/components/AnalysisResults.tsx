import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AnalysisResultsProps {
  stocksHtml: string;
  sectorsHtml: string;
  isLoading?: boolean;
}

const AnalysisResults = ({ stocksHtml, sectorsHtml, isLoading = false }: AnalysisResultsProps) => {
  if (isLoading) {
    return (
      <div className="w-full py-12 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-finance-teal"></div>
      </div>
    );
  }

  if (!stocksHtml && !sectorsHtml) {
    return (
      <div className="text-center text-finance-gray py-8">
        <p>No data available to display. Please check your portfolio or try again later.</p>
      </div>
    );
  }
  

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-finance-blue">Portfolio Analysis Results</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="sectors">
          <TabsList className="mb-4">
            <TabsTrigger value="sectors">Sector Distribution</TabsTrigger>
            <TabsTrigger value="stocks">Stock Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sectors">
            <div 
              className="overflow-x-auto" 
              dangerouslySetInnerHTML={{ __html: sectorsHtml }} 
            />
          </TabsContent>
          
          <TabsContent value="stocks">
            <div 
              className="overflow-x-auto" 
              dangerouslySetInnerHTML={{ __html: stocksHtml }} 
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AnalysisResults;
