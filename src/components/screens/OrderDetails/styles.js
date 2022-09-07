import { StyleSheet } from 'react-native'


export default StyleSheet.create(
    {
        page:
        { 
            flex: 1,
        },
        image:
        {
            width: '100%',
            aspectRatio: 5/3,
        },
        iconContainer:
        {
          padding: 30,
          position: 'absolute',
          top: 40,
          left: 10,

        },
        title: 
        {
          fontSize: 35,
          fontWeight: '600',
          marginVertical: 10,
          padding: 10
        },
        menuTitle:
        {
            marginTop: 20,
            fontSize: 18,
            letterSpacing: 0.7,          
            padding: 10
        },  
        subtitle: 
        {
          fontSize: 15,
          color: '#525252',
        },
        container :
        {
          margin: 10,
          padding: 10

        }
    })

