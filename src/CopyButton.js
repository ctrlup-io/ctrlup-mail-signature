import { CheckCircle, FileCopy } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function CopyButton({ isCopied, onCopy }) {
  return (
    <Button
      onClick={onCopy}
      color="primary"
      startIcon={isCopied ? <CheckCircle color="primary" /> : <FileCopy />}
      variant={isCopied ? "text" : "contained"}
    >
      {isCopied ? "Copied" : "Copy to clipboard"}
    </Button>
  );
}
