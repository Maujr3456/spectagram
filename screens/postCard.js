import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { FlatList } from "react-native-gesture-handler";
import firebase from "firebase";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class PostCard extends Component {
  constructor() {
    super();
    this.state = {
      post_id: this.props.post.key,
      post_data: this.props.post.value,
    };
  }
  render() {
    let post = this.state.post_data;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.props.navigation.navigate("PostScreen", {
            post: this.props.post,
          });
        }}
      >
        <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
              <Image
                style={styles.profileImage}
                source={require("../assets/profile_img.png")}
              ></Image>
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>{post.author}</Text>
            </View>
          </View>
          <Image
            source={require("../assets/post.jpeg")}
            style={styles.postImage}
          />
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>{post.caption}</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
              <Text style={styles.likeText}>12k</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2a2a2a",
    borderRadius: RFValue(20),
    padding: RFValue(20),
  },
  authorContainer: { flex: 0.1, flexDirection: "row" },
  authorImageContainer: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: RFValue(100),
  },
  authorNameContainer: { flex: 0.85, justifyContent: "center" },
  authorNameText: { color: "white", fontSize: RFValue(20) },
  postImage: {
    marginTop: RFValue(20),
    resizeMode: "contain",
    width: "100%",
    alignSelf: "center",
    height: RFValue(275),
  },
  captionContainer: {},
  captionText: { fontSize: 13, color: "white", paddingTop: RFValue },
});
