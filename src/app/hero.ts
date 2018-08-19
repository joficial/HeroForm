//It's an anemic model with few requirements and no behavior. 
//Perfect for the demo.
export class Hero {
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ){}
}
