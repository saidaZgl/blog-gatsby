import React from "react"
import { Link } from "gatsby"

import { List, Avatar, Divider } from "antd"

const Bio = () => (
  <List.Item>
    <List.Item.Meta
      avatar={
        <Avatar
          size={64}
          src="https://thumbs.dreamstime.com/z/avatar-de-programmeur-langue-logiciel-110589729.jpg"
        />
      }
      title={<Link to="/about">Saïda Zghal</Link>}
      description="Dev JS | Passionnée | Autodidacte, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />
  </List.Item>
)

export default Bio
