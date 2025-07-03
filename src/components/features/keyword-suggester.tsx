'use client';

import { suggestKeywords, type KeywordSuggestionOutput } from '@/ai/flows/keyword-suggestion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Wand2, Zap } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export function KeywordSuggester({ serviceDescription, serviceTitle }: { serviceDescription: string; serviceTitle: string }) {
  const [suggestion, setSuggestion] = useState<KeywordSuggestionOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSuggestKeywords = async () => {
    setIsLoading(true);
    setError(null);
    setSuggestion(null);
    try {
      const result = await suggestKeywords({ serviceDescription });
      setSuggestion(result);
    } catch (e) {
      setError('Failed to generate keyword suggestions. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-card/50 mt-12">
      <CardHeader>
        <div className='flex items-center gap-2'>
            <Wand2 className="h-6 w-6 text-accent" />
            <CardTitle>AI-Powered Keyword Suggestions</CardTitle>
        </div>
        <CardDescription>
            Boost your SEO for "{serviceTitle}" with relevant, high-performing keywords based on current trends. Click the button to generate suggestions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleSuggestKeywords} disabled={isLoading}>
            <Zap className="mr-2 h-4 w-4" />
            {isLoading ? 'Generating...' : 'Suggest Keywords'}
        </Button>

        {isLoading && (
            <div className='mt-6 space-y-4'>
                <div className='flex flex-wrap gap-2'>
                    <Skeleton className='h-8 w-24 rounded-full' />
                    <Skeleton className='h-8 w-32 rounded-full' />
                    <Skeleton className='h-8 w-28 rounded-full' />
                    <Skeleton className='h-8 w-20 rounded-full' />
                </div>
                <div className='space-y-2'>
                    <Skeleton className='h-4 w-1/3' />
                    <Skeleton className='h-4 w-full' />
                    <Skeleton className='h-4 w-4/5' />
                </div>
            </div>
        )}
        
        {error && <p className="mt-4 text-destructive">{error}</p>}

        {suggestion && (
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Suggested Keywords:</h3>
              <div className="flex flex-wrap gap-2">
                {suggestion.keywords.map((keyword, index) => (
                  <Badge key={index} variant="secondary" className='text-base py-1 px-3 bg-primary/20 text-primary-foreground border-primary/50'>
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Reasoning:</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{suggestion.reasoning}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
