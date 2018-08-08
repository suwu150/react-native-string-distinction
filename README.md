# react-native-string-distinction
react-native-string-distinction,divide the character string according to a certain character and display it in different styles after segmentation

The final rendering
----
![The final rendering](https://github.com/suwu150/react-native-text-segment/blob/master/react-native-text-segment.gif?raw=true)

Installation:  
-------------------------------------- 
```
 npm install --save react-native-string-distinction
```
Example usage: 
--------------------------------------- 
1.basic     

```javascript
import StringDistinction from 'react-native-string-distinction';

   ...
  render() {
    return (
        <StringDistinction
          value={'9.02%'}
          delimiter={'.'}
          frontStyle={{ fontSize: 18, color: '#fd7251' }}
          delimiterStyle={{ fontSize: 18, color: '#fd7251' }}
          behindStyle={{ fontSize: 12, color: '#fd7251' }}
        />
    );
  }
```

Props:   
---------------------------------------

|Props|Explain|type|require|default|          
|:-------|:--------|:--------|:-------|:----------|
|value|the string that needs to be split|string|yes|''|       
|delimiter|split string|string|no|no|     
|style|container style|object|no|{ alignItems: 'flex-end' }|     
|frontStyle|The style in the string before the split symbol|object|no|no|  
|delimiterStyle|Split symbol style|object|no|no|     
|behindStyle|The style behind the split symbol in the string|object|no|{}|     

Examples from props:
```javascript
   render() {
     return (
       <View>
         <Text>
           {`
           1.传入值：9.02%，用「.」进行分割
           2.传入值：你中有我，用「有」进行分割
           3.传入值：I Love You！！，用「ove」进行分割
           4.传入值：9.02%88988，用「%」进行分割
           5.传入值：Hello World，用「 」空格，进行分割
           6.传入值：Hello-World，不进行分割
           `}
         </Text>
         <StringDistinction
           value={'9.02%'}
           delimiter={'.'}
           frontStyle={{ fontSize: 18, color: '#fd7251' }}
           delimiterStyle={{ fontSize: 18, color: '#fd7251' }}
           behindStyle={{ fontSize: 12, color: '#fd7251' }}
         />
         <StringDistinction
           value={'你中有我'}
           delimiter={'有'}
           frontStyle={{ fontSize: 18, color: '#fd597a' }}
           delimiterStyle={{ fontSize: 18, color: '#cbfde5' }}
           behindStyle={{ fontSize: 12, color: '#fd7251' }}
         />
         <StringDistinction
           value={'I Love You！！'}
           delimiter={'ove'}
           frontStyle={{ fontSize: 20, color: '#ff4645' }}
           delimiterStyle={{ fontSize: 26, color: '#fd5098' }}
           behindStyle={{ fontSize: 20, color: '#fd14c2' }}
         />
         <StringDistinction
           value={'9.02%88988'}
           delimiter={'%'}
           frontStyle={{ fontSize: 18, color: '#fd7251' }}
           delimiterStyle={{ fontSize: 18, color: '#fd7251' }}
           behindStyle={{ fontSize: 20, color: '#fd7251' }}
         />
         <StringDistinction
           value={'Hello World'}
           delimiter={' '}
           frontStyle={{ fontSize: 18, color: '#fd7251' }}
           delimiterStyle={{ fontSize: 18, color: '#fd7251' }}
           behindStyle={{ fontSize: 26, color: '#fd7251' }}
         />
         <StringDistinction
           value={'Hello-World'}
         />
       </View>
     );
   }
```

LICENSE: 
-------   
MIT

