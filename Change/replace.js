import {sentence} from './Sentence.js'

export const changeSentence = (nameOfSentence) => {
    const nameOfSentenceOfArray = nameOfSentence.split(' ')
    for (let i = 0; i < nameOfSentenceOfArray.length; i++) {
        for (let e = 0; e < sentence.length; e++) {
            if (nameOfSentenceOfArray[i] === sentence[e].word) {
                nameOfSentence = nameOfSentence.replace(sentence[e].word, sentence[e].substitute);
            }
            else if (nameOfSentenceOfArray[i] === sentence[e].substitute) {
                nameOfSentence = nameOfSentence.replace(sentence[e].substitute, sentence[e].word);
            }
        }
    }
    return nameOfSentence;
}
