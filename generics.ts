class Queue<T> {
    private data: T[] = [];

    add(item: T){
        this.data.push(item);
    }

    remove(){
        this.data.shift();
    }
}

const nameQueue = new Queue<string>();
nameQueue.add('Ivan');
nameQueue.add('Fica');

const numberQueue = new Queue<number>();
numberQueue.remove();