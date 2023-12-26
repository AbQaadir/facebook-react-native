import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";


const user = {
    id : "u1",
    name : "Abdul Qaadir",
    image : "https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-1/326991224_1940801912780958_7344187069892566927_n.jpg?stp=dst-jpg_p240x240&_nc_cat=101&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeEYFABt6ADKXKw2Pq6--lmwHkhWtdahLGceSFa11qEsZ50z9OH2ZEMTYQDtYxmPM3Sl9dR3QDlHW96ipx7kvw-n&_nc_ohc=Sis1-VML0nEAX9gC-SG&_nc_ht=scontent.fcmb4-2.fna&oh=00_AfB9vFd6xLoGZ37h133CStm4eZu9j1lwr5VrGs-JG3J05A&oe=658E093F",
}

const CreatePostScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            {/* Profile intro */}
            <View style={styles.profileHeader}>
                <View style={styles.profileImgBlock}>
                    <Image
                        source={{ uri: user.image }}
                        style={styles.profileImg}
                    />
                </View>
                <View style={styles.profileTextBlock}>
                    <Text style={styles.profileTextName}>{user.name}</Text>
                </View>
            </View>

            {/* Create Post */}
            <View style={styles.captionInputBox}>
                <TextInput placeholder="What is on your mind?" multiline></TextInput>
            <Button title="Post">Post</Button>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    profileHeader: {
        width: "100%",
        marginTop: 40,
        paddingBottom: 10,
        height: 60,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },

    profileImgBlock: {
        width: 60,
        height: 60,
        marginLeft: 15,
        justifyContent: "center",
        alignItems: "center",
    },

    profileImg: {
        width: 50,
        height: 50,

        borderRadius: 25,
    },

    profileTextBlock: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },

    profileTextName: {
        fontSize: 16,
        fontWeight: "bold",
    },
})

export default CreatePostScreen;