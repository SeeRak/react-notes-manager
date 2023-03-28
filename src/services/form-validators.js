export class ValidatorService{
    static min(value, min){
        if(value.length < min){
            return `Veuillez tapper au moins ${min} lette(s)` 
        } 
    }
    static max(value, max){
        if(value.length > max){
            return `Veuillez tapper au plus ${max} lette(s)` 
        } 
    }
}