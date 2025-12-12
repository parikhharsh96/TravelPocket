"use client";

import { useEffect, useState } from "react";
import { useApi } from '@/lib/use-api';
import { API_ENDPOINTS } from '@/lib/constants';

interface Story {
    storyId: number;
    title: string;
    storyDate: string;
    postedBy: string;
    shortDescription: string;
    longDescription: string;
    imageUrl: string;
}

export default function IncredibleStories() {
    const { data, loading, error, execute } = useApi<any>();
    const [stories, setStories] = useState<Story[]>([]);

    useEffect(() => {
        execute(API_ENDPOINTS.customerHome.getStories);
    }, [execute]);

    useEffect(() => {
        if (data) {
            console.log('Stories API data:', data);
            if (data.data) {
                setStories(data.data);
            }
        }
        if (error) {
            console.error('Stories API error:', error);
        }
    }, [data, error]);

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}