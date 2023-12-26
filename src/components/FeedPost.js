import { StyleSheet, Text, View, Image } from 'react-native';
import LikeImg from '../../assets/images/like.png';
import {
    Entypo,
    AntDesign,
    FontAwesome5,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

const FeedPost = ({ post }) => {
    return (
        <View style={styles.post}>
            {/* Header */}
            <View style={styles.postHeaderContainer}>
                <View style={styles.profileImage}>
                    <Image
                        source={{ uri: post.User.image }}
                        style={styles.postProfilePicture}
                    />
                </View>
                <View style={styles.postHeaderNames}>
                    <Text style={styles.postHeaderName}>{post.User.name}</Text>
                    <Text style={styles.postHeaderTime}>{post.createdAt}</Text>
                </View>
                <View style={styles.postHeaderRight}>
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </View>
            </View>


            {/* Body */}
            <View style={styles.postBody}>
                {post.description && (
                    <View style={styles.postCaption}>
                        <Text style={styles.postDescription}>{post.description}</Text>
                    </View>
                )}

                {post.image && (
                    <Image
                        source={{ uri: post.image }}
                        style={styles.postImage}
                        resizeMode="cover"
                    />
                )}
            </View>

            {/* Footer */}
            <View style={styles.postFooter}>

                <View style={styles.footerTop}>
                    <View style={styles.postFooterLeft}>
                        <Image
                            source={LikeImg}
                            style={styles.postFooterLikeImg}
                        />
                        <Text style={styles.postFooterLikeText}>Elone Musk and {post.numberOfLikes} others</Text>
                    </View>
                    <View style={styles.postFooterRight}>
                        <Text style={styles.postFooterShareText}>{post.numberOfShares} Shares</Text>
                    </View>
                </View>


                <View style={styles.footerBottom}>
                    <View style={styles.footerBottomLeft}>
                        <AntDesign name="like2" size={24} color="gray" />
                        <Text style={styles.footerBottomLeftText}>Like</Text>
                    </View>
                    <View style={styles.footerBottomRight}>
                        <FontAwesome5 name="comment" size={24} color="gray" />
                        <Text style={styles.footerBottomRightText}>Comment</Text>
                    </View>
                    <View style={styles.footerBottomRight}>
                        <MaterialCommunityIcons name="share-outline" size={24} color="gray" />
                        <Text style={styles.footerBottomRightText}>Share</Text>
                    </View>
                </View>
            </View>
            <View style={styles.spaceTag}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },


    post: {
        width: "100%",
    },

    postHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15,
        marginTop: 15,
    },

    profileImage: {
        width: 60,
        height: 50,
        borderRadius: 25,
    },

    postProfilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    postHeaderNames: {
        flexDirection: "column",
    },

    postHeaderName: {
        fontWeight: "bold",
    },

    postHeaderTime: {
        fontWeight: "bold",
        color: "gray",
    },

    postHeaderRight: {
        flex: 1,
        alignItems: "flex-end",
    },

    postBody: {
        marginVertical: 5,
    },

    postCaption: {
        marginHorizontal: 15,
        marginBottom: 5,
    },

    postDescription: {
        lineHeight: 18,
        letterSpacing: 0.3,
    },

    postImage: {
        marginTop: 5,
        width: "100%",
        aspectRatio: 1,
    },

    postFooter: {
        marginHorizontal: 15,
        marginBottom: 10,
    },

    footerTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    postFooterLeft: {
        flexDirection: "row",
        alignItems: "center",
    },

    postFooterLikeImg: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },

    postFooterLikeText: {
        marginLeft: 5,
        fontSize: 12,
    },

    postFooterRight: {
    },

    postFooterShareText: {
        fontSize: 12,
        color: "gray",
    },

    footerBottom: {
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "lightgray",
        paddingTop: 8,
        justifyContent: "space-around",
        marginTop: 10,
    },

    footerBottomLeft: {
        flexDirection: "row",
        alignItems: "center",
    },

    footerBottomLeftText: {
        marginLeft: 5,
        color: "gray",
    },

    footerBottomRight: {
        flexDirection: "row",
        alignItems: "center",
    },

    footerBottomRightText: {
        marginLeft: 5,
        color: "gray",
    },

    spaceTag: {
        backgroundColor: "#f0f2f5",
        width: "100%",
        height: 20,
    }
});

export default FeedPost;
