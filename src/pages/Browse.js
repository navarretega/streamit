import React, { useContext, useState, useEffect } from "react";

import { Header, Card, Player } from "../components";
import { FirebaseContext } from "../context/firebaseContext";
import logo from "../assets/misc/logo.png";

const user = {
  displayName: "Alex",
  photoURL: "1",
};

function Browse({ slides }) {
  const { firebaseAuth } = useContext(FirebaseContext);
  const [category, setCategory] = useState("series");
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);
  const [videoURL, setVideoURL] = useState("");

  console.log("videoURL", videoURL);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  return (
    <>
      <Header src="westworld2" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={"/"} src={logo} alt="Netflix" />
            <Header.Link active={category === "series" ? "true" : "false"} onClick={() => setCategory("series")}>
              Series
            </Header.Link>
            <Header.Link active={category === "films" ? "true" : "false"} onClick={() => setCategory("films")}>
              Films
            </Header.Link>
          </Header.Group>

          <Header.Group>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.Link>{user.displayName}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={() => firebaseAuth.signOut()}>Sign out</Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Westworld</Header.FeatureCallOut>
          <Header.Text>
            Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite can be
            indulged without consequence.
          </Header.Text>
          <Header.PlayButton>See Trailer</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => {
          return (
            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                {slideItem.data.map((item) => {
                  return (
                    <Card.Item key={item.docId} item={item} setVideoURL={setVideoURL}>
                      <Card.Image src={`/${category}/${item.stream}/${item.slug}/small.jpg`} />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  );
                })}
              </Card.Entities>
              <Card.Feature category={category}>
                <Player>
                  <Player.Button />
                  <Player.Video videoURL={videoURL} />
                </Player>
              </Card.Feature>
            </Card>
          );
        })}
      </Card.Group>
      <div style={{ height: "100px" }} />
    </>
  );
}

export default Browse;
