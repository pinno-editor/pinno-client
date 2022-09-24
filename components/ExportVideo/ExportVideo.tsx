import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  LinearProgress,
  List,
  ListItem,
  MenuItem,
  Select,
  ToggleButtonGroup,
  Typography,
  ToggleButton,
  SelectChangeEvent,
} from "@mui/material";
import { FC, useState } from "react";

interface ExportVideoData {
  format: string;
  resolution: number;
}

interface ExportVideoProps {
  open: boolean;
  onClose?: () => void;
  onChange?: (data?: ExportVideoData) => void;
}

const kAvailableFormats = () => {
  return [
    "3840x2160",
    "2560x1440",
    "1920x1080",
    "2160x3840",
    "1440x2560",
    "1080x1920",
    "1000x1000",
  ];
};

const ExportVideo: FC<ExportVideoProps> = ({ open, onChange }) => {
  const [format, setFormat] = useState("");
  const [resolution, setResolution] = useState(0);

  const handleFormatChange = (
    event: React.MouseEvent<HTMLElement>,
    currentResolution: string | null
  ) => {
    setResolution(Number(currentResolution));
  };
  const handleResolutionChange = (event: SelectChangeEvent) => {
    setFormat(event.target.value);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Экспорт видео:</DialogTitle>
      <DialogContent>
        <List>
          <ListItem>
            <Grid
              container
              justifyContent="space-between"
              flexDirection="row"
              alignItems="center"
              gap={3}
            >
              <Grid xs={6}>
                <Typography>Видео №1</Typography>
              </Grid>
              <Grid
                container
                flexDirection="column"
                gap={1}
                justifyContent="center"
              >
                <Grid>
                  <Box>
                    <ToggleButtonGroup
                      onChange={handleFormatChange}
                      color="primary"
                      aria-label="medium secondary button group"
                      exclusive
                    >
                      <ToggleButton value="avi">.avi</ToggleButton>
                      <ToggleButton value="mp4">.mp4</ToggleButton>
                      <ToggleButton value="mkv">.mkv</ToggleButton>
                    </ToggleButtonGroup>
                  </Box>
                </Grid>

                <Grid>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={kAvailableFormats()[resolution]}
                    onChange={handleResolutionChange}
                    autoWidth
                    label="Разрешение"
                  >
                    {kAvailableFormats().map((item, index) => (
                      <MenuItem key={index} value={index}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() =>
            onChange && onChange({ format: format, resolution: resolution })
          }
        >
          Экспорт
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExportVideo;
