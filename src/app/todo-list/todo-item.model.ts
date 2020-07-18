export class TodoItem {
    /**
     * name of the to do item
     */
    private task: string;
    /**
     * completeness of the to do item
     */
    private complete: boolean = false;

    get isComplete(): boolean {
        return this.complete;
    }

    get getTask(): string {
        return this.task;
    }
    toggleComplete() : void{
        this.complete = !this.complete;
    }

    constructor(task: string) {
        this.task = task || '';
    }
}
