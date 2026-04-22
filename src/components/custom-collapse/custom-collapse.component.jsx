import React from "react"
import * as S from "./custom-collapse.styles"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { Collapse, IconButton } from "@mui/material"

const CustomCollapse = ({ name, items, url, path, children }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <S.Wrapper>
      <S.Link className={`${path === url && "selected"}  ${open && "open"}`}>
        <S.Text url={url}>{name}</S.Text>
        <IconButton onClick={() => setOpen(!open)}>
          {items && <KeyboardArrowDownIcon />}
        </IconButton>
      </S.Link>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </S.Wrapper>
  )
}

export default CustomCollapse
