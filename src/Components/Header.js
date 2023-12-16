import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
export const Header = ({ title, customStyles, showLogo, hasButton , handleEdit }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        background: "grey",
        color: "white",
        fontSize: "26px",
        gap: "8px",
        ...customStyles,
      }}
    >
      {showLogo && (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          style={{ height: "40px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/1024px-Walmart_logo.svg.png"
        />
      )}
      {hasButton && <div style={{display:'block', width:'200px'}} />}
      {title}
      {hasButton && (
        <Button
          variant="contained"
          style={{
            width: "200px",
            textTransform: "none",
            fontSize: "16px",
            gap: "16px",
          }}
          onClick={(e)=>handleEdit( undefined, true)}
        >
          New Rule
          <AddIcon
            style={{
              width: "32px",
              height: "32px",
              cursor: "pointer",
            }}
          />
        </Button>
      )}
    </div>
  );
};
