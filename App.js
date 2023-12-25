import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const post = {
	id: "p1",
	createdAt: "19 m",
	User: {
		id: "u1",
		image:
			"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
		name: "Vadim Savin",
	},
	description:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
	image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
	numberOfLikes: 11,
	numberOfShares: 2,
};


export default function App() {
	return (
		<View style={styles.container}>

			<View style={styles.post}>
				{/* Header */}
				<View style={styles.postHeaderContainer}>
					{/* <Image
						source={{ uri: post.User.image }}
						style={styles.postProfilePicture}
					/>
					<View style={styles.postHeaderNames}>
						<Text style={styles.postHeaderNames}>{post.User.name}</Text>
						<Text style={styles.postHeaderTime}>{post.createdAt}</Text>
					</View> */}

					
				</View>

				{/* Body */}
				<View style={styles.postBody}>

				</View>

				{/* Footer */}
				<View style={styles.postFooter}>

				</View>
			</View>

			<StatusBar style="auto" />
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


	// post: {
	//   marginVertical: 15,
	// },

	// postHeaderContainer: {
	//   flexDirection: "row",
	//   justifyContent: "space-between",
	//   alignItems: "center",
	//   marginHorizontal: 15,
	// },

	// postProfilePicture: {
	//   width: 50,
	//   height: 50,
	//   borderRadius: 25,
	// },

	// postHeaderNames: {
	//   flexDirection: "row",
	// },

	// postHeaderName: {
	//   marginRight: 5,
	//   fontWeight: "bold",
	// },

	// postHeaderTime: {
	//   fontWeight: "bold",
	//   color: "#ccc",
	// },

	// postBody: {
	//   marginTop: 15,
	// },

	// postFooter: {
	//   marginHorizontal: 15,
	// },

	// postFooterLeft: {
	//   flexDirection: "row",
	//   justifyContent: "space-between",
	//   width: 120,
	// },

	// postFooterRight: {
	//   flexDirection: "row",
	//   justifyContent: "space-between",
	//   alignItems: "center",
	//   width: 120,
	// },

	// postFooterText: {
	//   marginRight: 5,
	// },

	// postImage: {
	//   width: "100%",
	//   height: 200,
	//   marginVertical: 15,
	// },

	// postCaption: {
	//   marginHorizontal: 15,
	// },

	// postCaption: {
	//   marginVertical: 3,
	// },

	// postCaptionName: {
	//   marginRight: 5,
	//   fontWeight: "bold",
	// },

	// postLikes: {
	//   fontWeight: "bold",
	//   marginHorizontal: 15,
	// },

	// postTime: {
	//   marginTop: 5,
	//   marginHorizontal: 15,
	//   color: "#ccc",
	//   fontWeight: "bold",
	// },

	// postComments: {
	//   marginTop: 5,
	//   marginHorizontal: 15,
	// },

	// postComment: {
	//   flexDirection: "row",
	//   marginBottom: 5,
	// },

	// postCommentName: {
	//   marginRight: 5,
	//   fontWeight: "bold",
	// },

	// postCommentText: {
	//   marginRight: 5,
	// },

	// postCommentLikes: {
	//   fontWeight: "bold",
	// },

	// postCommentLikesName: {
	//   marginRight: 5,
	//   fontWeight: "bold",
	// },

	// postCommentLikesText: {
	//   marginRight: 5,
	// },

});
