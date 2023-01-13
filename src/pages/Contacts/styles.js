import { StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
    BodyContacts: {
        backgroundColor: "black",
        width: "100%",
        height: "100%",    
    },
    TextContact: {
        color: "white",
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 18
       
    },
    Space: {
        marginTop: 30,
        color: "orange",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 28,
        marginBottom: 30
    },
    MoreInformation: {
        color: "orange",
        fontWeight: "bold",
        marginLeft: 28  ,
        fontSize: 14    
    },
    AddInfo: {
        backgroundColor: "orange",
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        position: "absolute",
        marginTop: 550,
        marginLeft: 320,
    },
    AlignIcon: {
        marginLeft: 3,
        marginBottom: 6
    }


})

export default styles