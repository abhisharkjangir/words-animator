### words-animator
#### words-animator is a react component, which can be used to replace a part of string with an array of words with some great and smooth animation.

<!-- ![ScreenShot](https://i.imgur.com/1lqze2U.png)

Note : Screenshot source http://wordbook.imabhi.in -->

### #Installation
```javascript
npm install words-animator --save
```

### #Usage
```javascript
import Wordsanimator from 'words-animator'

class YourcomponentName extends React.Component {
  render(){
    return (
      <Wordsanimator partialSentence="Words-animator is" words={['smooth', 'cool', 'awesome']]} style="rw-words-3"/>
    )
  }

 export default YourcomponentName;
```

### #Props
  * partialSentence : "String" | "An sentence in which you want to place your words." | OPTIONAL
  * words : "String" | "An array or words." | MANDATORY | MAX-LENGTH - 6
  * style : "String" | Default - rw-words-1 | [rw-words-1, rw-words-2, rw-words-3, rw-words-4]

### #Feature Request
  Drop a mail on abhisharjangir@ymail.com for any new feature request.
