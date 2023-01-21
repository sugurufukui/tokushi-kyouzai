import { FC, memo } from "react";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Box, Modal } from "@mui/material";

import { MaterialType } from "types/api/materialType";

type Props = {
  //useSelectMaterialのselectMaterialから持ってくるので同じ型にする
  material: MaterialType | null;
  open: boolean;
  onClose: () => void;
};

// 一覧の中のいずれかをクリックすると表示されるモーダル画面
export const MaterialDetail: FC<Props> = memo((props) => {
  const { material, open, onClose } = props;
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        sx={{ alineItems: "center", textAline: "center" }}
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            borderRadius: 4,
            alineItems: "center",
            textAline: "center",
          }}
        >
          <Card
            sx={{
              width: "260px",
              height: "260px",
              bgcolor: "white",
              boxShadow: "md",
              p: "4",
              m: "2",
              borderRadius: "10px",
              textAline: "center",
              alineItems: "center",
            }}
          >
            <CardMedia
              component="img"
              src="https://source.unsplash.com/random"
            ></CardMedia>
          </Card>
          {/* materialはnullの可能性もあるので許容する為にオプショナルチェイニングを使用する */}
          <Typography>{material?.name}</Typography>
          <Typography>{material?.description}</Typography>
          <CardActions sx={{ p: 1 }}>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderIcon />
            </IconButton>
            <CardContent sx={{ p: 1 }}>
              <Typography sx={{ variant: "h5" }}>5</Typography>
            </CardContent>
            <IconButton aria-label="add to comment">
              <ChatBubbleOutlineIcon />
            </IconButton>
            <CardContent sx={{ p: 1 }}>
              <Typography sx={{ variant: "h5" }}>5</Typography>
            </CardContent>
          </CardActions>
          <Link to={`/materials/${material?.id}`}>もっと詳しく</Link>
        </Box>
      </Modal>
    </>
  );
});