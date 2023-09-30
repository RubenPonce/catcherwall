import Filter from "bad-words";
const filter = new Filter();
filter.addWords("impregnate", "pedophile", "pedo", "molest","rape", "raped", "molesting");
export const filterWords = (words)=>{
    try{
        console.log("filterWords", words);
        return filter.clean(words);
    }
    // this is probably an emoji like "🧁"
    catch (e) {
        return words;
    }
}