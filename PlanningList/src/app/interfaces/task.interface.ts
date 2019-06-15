
export interface TaskType {
    title: string;
    description: string;
    date: Date;
    status: 'done' | 'undone';
    placeName: string;
    adress: string;
    id?: number;
}