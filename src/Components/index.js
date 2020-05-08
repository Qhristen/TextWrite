import React, { useState } from "react";
import html2canvas from "html2canvas";
import { InfoRounded, Settings, Photo } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
  Popover,
  Link,
  Grid,
  Typography,
} from "@material-ui/core";

const FormInput = () => {
  const [input, setInput] = useState({
    font: "",
    penColor: "",
    fontSize: "",
    verticalPosition: "",
    wordSpacing: "",
    textArea: "",
  });
  const [output, setOutPut] = useState("");
  const [maginCheckbox, setMarginCheckbox] = useState({
    marginToggle: false,
  });
  const [PaperCheckbox, setPaperCheckbox] = useState({
    paperLine: true,
  });
  const [anchorEl, setAnchorEl] = useState(false);
  const [anchorElPhoto, setAnchorElPhoto] = useState(false);
  const [anchorElSetting, setAnchorElSetting] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl({ anchorEl: true });
  };

  const handleClose = () => {
    setAnchorEl(false);
  };
  const handleClickPhoto = (event) => {
    event.preventDefault();
    setAnchorElPhoto({ anchorEl: true });
  };
  const handleClosePhoto = () => {
    setAnchorElPhoto(false);
  };

  const handleClickSetting = (event) => {
    event.preventDefault();
    setAnchorElSetting({ anchorEl: true });
  };

  const handleCloseSetting = () => {
    setAnchorElSetting(false);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const openPhoto = Boolean(anchorElPhoto);
  const idPhoto = openPhoto ? "simple-popover" : undefined;

  const openSetting = Boolean(anchorElSetting);
  const idSetting = openSetting ? "simple-popover" : undefined;

  const [styles, setStyles] = useState({
    border: "",
    background: "",
    display: "none",
    fontFamily: "",
    fontSz: "",
    paddingTop: "",
    wordSpacing: "",
    color: "",
    toggle: false,
    paper: false,
    marginT: "",
  });

  const [fontChange, setFontChange] = useState({ font: "" });
  const [colorChange, setColorChange] = useState({ color: "" });

  const color = (e) => {
    setColorChange({ color: e.target.value });
  };

  const fontSelect = (e) => {
    setFontChange({ font: e.target.value });
  };

  const generate = (e) => {
    e.preventDefault();
    const page = document.querySelector(".page");
    const canvas = html2canvas(page).then((canvas) => {
      const img = new Image();
      img.src = canvas.toDataURL("image/jpeg");
      setOutPut(img.src);
    });
    setStyles({ toggle: true, display: "block", marginT: "0px" });
    return canvas;
  };

  // const [file, setFile] = useState({ selectedFile: [] });
  const fileChange = (e) => {
    const file = e.target.files[0];
    addFontFromFile(file);
  };

  const addFontFromFile = (fileObj) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(fileObj);
    reader.onload = (e) => {
      const newFont = new FontFace("new-font", e.target.result);
      newFont
        .load()
        .then((loadedFace) => {
          document.fonts.add(loadedFace);
        })
        .catch((e) => console.log(e));
      console.log(newFont);
    };
  };

  const download = (e) => {
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
      .then((res) => {
        res.arrayBuffer().then((buffer) => {
          // const uRL = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = output;
          link.setAttribute("Download", "image.jpg");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const marginChange = () => {
    setMarginCheckbox({ marginToggle: !maginCheckbox.marginToggle });
  };

  const paperChange = () => {
    setPaperCheckbox({ paperLine: !PaperCheckbox.paperLine });
  };

  // const [select, setSelect] = useState({
  //   penColor: "",
  //   fontFamily: "",
  // });

  // const selectedChange = (e) => {
  //   let value = e.target.value;
  //   setSelect({ penColor: value, fontFamily: value });
  // };
  const handleChange = (e) => {
    setInput({ [e.target.name]: e.target.value });
    setStyles({
      fontSz: input.fontSize,
      wordSpacing: input.wordSpacing,
      paddingTop: input.verticalPosition,
      display: styles.display === "none" ? "none" : "block",
    });
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "20ch",
      },
    },
    typography: {
      padding: theme.spacing(2),
    },
  }));

  const classes = useStyles();
  // console.log(checkbox.paperLine);

  return (
    <div className=" fl">
      <Container style={{ margin: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={5} style={{ background: "white" }}>
            <div className="row output-grid responsive-row">
              <div className="col">
                <div
                  className={`page  
              ${maginCheckbox.marginToggle && "margined-page"}`}
                  style={{
                    border: styles.border,
                    background: styles.background,
                  }}
                >
                  <div
                    className="paper-margin-top-line"
                    contentditable="true"
                  ></div>
                  <div
                    className={`textarea row ${
                      PaperCheckbox.paperLine && "paper"
                    }`}
                  >
                    <div className="paper-margin-left-line"></div>
                    <div
                      role="textbox"
                      style={{
                        fontSize: styles.fontSz + "px",
                        fontFamily: fontChange.font,
                        wordSpacing: styles.wordSpacing + "px",
                        paddingTop: styles.paddingTop + "px",
                        color: colorChange.color,
                      }}
                      onChange={handleChange}
                      name="note"
                      value={input.textArea}
                      className={`paper-content`}
                      id="note"
                      contentEditable="true"
                    >
                      Hendrerit. Proin ipsum nisl, lacinia vitae purus
                      ullamcorper, maximus convallis sem. Sed nec lacinia lorem.
                      Duis arcu metus, cursus non odio quis, tincidunt tempor
                      augue. Donec eget vestibulum risus. Nullam blandit quis
                      est vitae feugiat hendrerit in erat. Duis interdum nisl
                      risus, ac ultrices ipsum auctor at. Aliquam faucibus
                      iaculis metus sit amet tincidunt. Vestibulum cursus urna
                      vel nunc imperdiet suscipit. Ut eu augue egestas, porta
                      orci lobortis, pharetra orci. Morbi eu tellus quis nisi
                      tempor accumsan nec eu urna. empor, ullamcorper tortor.
                      Mauris quis fermentum augue. Phasellus ac nisl hendrerit,
                      fringilla enim aliquam, placerat odio. Ut tortor nisi,
                      pellentesque sed nisi at, hendrerit imperdiet turpis.
                      Proin interdum porttitor metus at hendrerit. Proin ipsum
                      nisl, lacinia vitae purus ullamcorper, maximus convallis
                      sem. Sed nec lacinia lorem. Duis arcu metus, cursus non
                      odio quis, tincidunt tempor augue. Donec eget vestibulum
                      risus. Nullam blandit quis est vitae feugiat.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixx">
              <InfoRounded
                onClick={handleClick}
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  marginTop: "20px",
                }}
              />
              <Popover
                id={id}
                open={open}
                onClose={handleClose}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "top",
                }}
              >
                <Typography className={classes.typography}>
                  <section className="guide" id="how-to-add-handwriting">
                    <h2>How to add your own handwriting?</h2>
                    <ul>
                      <li>
                        You will have to generate font of your handwriting.
                      </li>
                      <li>
                        Websites like{" "}
                        <Link href="https://www.calligraphr.com/en/">
                          Calligraphr
                        </Link>{" "}
                        can let you do that.
                      </li>
                      <li>
                        Once you get .ttf file of your handwriting, upload it
                        from upload button and boom! you will have your
                        handwriting in the page.
                      </li>
                    </ul>
                  </section>{" "}
                </Typography>{" "}
              </Popover>

              <Settings
                className="hide-icon"
                onClick={handleClickSetting}
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  marginTop: "20px",
                  marginLeft: "15",
                }}
              />

              <Popover
                id={idSetting}
                open={openSetting}
                onClose={handleCloseSetting}
                anchorEl={anchorElSetting}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "top",
                }}
              >
                <form
                  className={`${classes.root} m-form`}
                  style={{
                    border: styles.border,
                    background: styles.background,
                    display: "grid",
                  }}
                  onSubmit={generate}
                >
                  <label> Add your font </label>
                  <TextField
                    variant="outlined"
                    type="file"
                    className="form-control mt-3"
                    name="font"
                    onChange={fileChange}
                  />
                  <label> show margin </label>
                  <input
                    defaultChecked
                    color="primary"
                    type="checkbox"
                    className="form-control mt-3"
                    checked={maginCheckbox.marginToggle}
                    name="mart"
                    onChange={marginChange}
                  />

                  <label> show paper Line</label>
                  <input
                    defaultChecked
                    color="primary"
                    type="checkbox"
                    className="form-control mt-3"
                    value={PaperCheckbox.paperLine}
                    name="paper"
                    onChange={paperChange}
                  />
                  <label>Font Size</label>
                  <TextField
                    variant="outlined"
                    type="number"
                    className="form-control mt-3"
                    min="0"
                    name="fontSize"
                    value={input.fontSize ? input.fontSize : "12"}
                    onChange={handleChange}
                    placeholder="font size"
                  />
                  <label>vertical Position</label>
                  <TextField
                    variant="outlined"
                    type="number"
                    className="form-control mt-3"
                    min="0"
                    name="verticalPosition"
                    value={
                      input.verticalPosition ? input.verticalPosition : "0"
                    }
                    onChange={handleChange}
                    placeholder="vertical position text"
                  />
                  <label>Word spacing</label>
                  <TextField
                    variant="outlined"
                    type="number"
                    className="form-control mt-3"
                    min="0"
                    name="wordSpacing"
                    value={input.wordSpacing ? input.wordSpacing : "3"}
                    onChange={handleChange}
                    placeholder="word spacing"
                  />

                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Pen Color
                    </InputLabel>
                    <Select
                      className="form-control mt-3"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label="PenColor"
                      onChange={color}
                      value={colorChange.color}
                      name="penColor"
                    >
                      <MenuItem value="#000F55">Blue</MenuItem>
                      <MenuItem value="#333">Black</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Font
                    </InputLabel>
                    <Select
                      className="form-control mt-3"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label="font"
                      onChange={fontSelect}
                      value={fontChange.font}
                      name="font"
                    >
                      <MenuItem value="'Fattana'">Fattana</MenuItem>
                      <MenuItem value="'Homemade Apple', cursive">
                        Homemade Apple
                      </MenuItem>

                      <MenuItem value="'new-font'">My Font</MenuItem>
                    </Select>
                  </FormControl>

                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className=" btn btn-primary mb-2"
                  >
                    Generate
                  </Button>
                </form>
              </Popover>

              <Photo
                className="hide-icon"
                onClick={handleClickPhoto}
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  marginTop: "20px",
                  marginLeft: "15",
                }}
              />
              <Popover
                id={idPhoto}
                open={openPhoto}
                onClose={handleClosePhoto}
                anchorEl={anchorElPhoto}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "top",
                }}
              >
                <div className="col output-container">
                  <div id="output1" className="output">
                    <img src={output} alt="note" />
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      color="secondary"
                      className="btnn"
                      style={{ marginTop: "20px" }}
                      onClick={download}
                    >
                      Download note
                    </Button>
                  </div>
                </div>
              </Popover>
            </div>
          </Grid>
          <Grid
            item
            xs={5}
            style={{ display: styles.display, background: "white" }}
          >
            <div className="col output-container">
              <div
                id="output"
                className="output"
                style={{
                  display: `${window.innerWidth === 768 ? "none" : "block"}`,
                }}
              >
                <img src={output} alt="note" />
              </div>
              <div>
                <Button
                  variant="contained"
                  color="secondary"
                  className="btnn"
                  style={{ marginTop: "20px" }}
                  onClick={download}
                >
                  Download note
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={2} style={{ background: "white" }} className="m-input">
            <form
              className={`${classes.root} m-form`}
              style={{
                border: styles.border,
                background: styles.background,
              }}
              onSubmit={generate}
            >
              <label> Add your font </label>
              <TextField
                variant="outlined"
                type="file"
                className="form-control mt-3"
                name="font"
                onChange={fileChange}
              />
              <label> show margin </label>
              <input
                defaultChecked
                color="primary"
                type="checkbox"
                className="form-control mt-3"
                checked={maginCheckbox.marginToggle}
                name="mart"
                onChange={marginChange}
              />

              <label> show paper Line</label>
              <input
                defaultChecked
                color="primary"
                type="checkbox"
                className="form-control mt-3"
                value={PaperCheckbox.paperLine}
                name="paper"
                onChange={paperChange}
              />
              <label>Font Size</label>
              <TextField
                variant="outlined"
                type="number"
                className="form-control mt-3"
                min="0"
                name="fontSize"
                value={input.fontSize ? input.fontSize : "12"}
                onChange={handleChange}
                placeholder="font size"
              />
              <label>vertical Position</label>
              <TextField
                variant="outlined"
                type="number"
                className="form-control mt-3"
                min="0"
                name="verticalPosition"
                value={input.verticalPosition ? input.verticalPosition : "0"}
                onChange={handleChange}
                placeholder="vertical position text"
              />
              <label>Word spacing</label>
              <TextField
                variant="outlined"
                type="number"
                className="form-control mt-3"
                min="0"
                name="wordSpacing"
                value={input.wordSpacing ? input.wordSpacing : "3"}
                onChange={handleChange}
                placeholder="word spacing"
              />

              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Pen Color
                </InputLabel>
                <Select
                  className="form-control mt-3"
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="PenColor"
                  onChange={color}
                  value={colorChange.color}
                  name="penColor"
                >
                  <MenuItem value="#000F55">Blue</MenuItem>
                  <MenuItem value="#333">Black</MenuItem>
                </Select>
              </FormControl>

              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Font
                </InputLabel>
                <Select
                  className="form-control mt-3"
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="font"
                  onChange={fontSelect}
                  value={fontChange.font}
                  name="font"
                >
                  <MenuItem value="'Fattana'">Fattana</MenuItem>
                  <MenuItem value="'Homemade Apple', cursive">
                    Homemade Apple
                  </MenuItem>
                  <MenuItem value="'Liu Jian Mao Cao', cursive">
                    Liu Jian Mao Cao
                  </MenuItem>
                  <MenuItem value="'new-font'">My Font</MenuItem>
                </Select>
              </FormControl>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                className=" btn btn-primary mb-2"
              >
                Generate
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <div className="fut">
          Made with &hearts; by...
          <Link
            href="http://www.github.com/Qhristen"
            style={{
              color: "orange",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            {" "}
            Qhristen
          </Link>{" "}
        </div>
      </Container>
    </div>
  );
};

export default FormInput;
