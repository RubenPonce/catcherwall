import Filter from "bad-words";
const filter = new Filter();
filter.addWords("impregnate", "pedophile", "pedo", "molest","rape", "raped", "molesting");
export const filterWords = (words)=>{
    return filter.clean(words)
}