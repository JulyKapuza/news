import { useQueryClient } from "react-query";
import { useDeleteNews } from "../hooks";
import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

interface ButtonDeleteProps {
  id: string;
}

export const ButtonDelete = ({ id }: ButtonDeleteProps) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useDeleteNews();

  const handleDelete = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries("news");
  };

  return (
    <IconButton
      onClick={() => handleDelete()}
      aria-label="delete"
      color="error"
      size="small"
    >
      <ClearIcon fontSize="small" />
    </IconButton>
  );
};
