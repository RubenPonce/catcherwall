import Filter from "bad-words";
const filter = new Filter();
filter.addWords("pedophile", "pedo", "molest","rape", "raped", "molesting");
export const filterWords = (words)=>{
    return filter.clean(words)
}