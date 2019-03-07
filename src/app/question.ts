export class Question {
    constructor(
        public question: string,
        public options: string[],
        public answer: string,
        public explanation: string,
        public answered: boolean = false
    ) { }
}
