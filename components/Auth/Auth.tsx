import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
  DialogContent,
  Stack,
} from "@mui/material";
import { FC } from "react";
import { GoogleIdLogo, VkIdLogo, YandexIdLogo } from "./SSOIcons";
import styles from "./Auth.module.scss";

interface AuthProps {
  open: boolean;
}
const Auth: FC<AuthProps> = ({ open }) => {
  return (
    <Dialog open={open} maxWidth="xs">
      <DialogTitle>Авторизация в Pinno</DialogTitle>

      <DialogContent>
        <ul>
          <li>
            <Typography variant="body1" component="p">
              Возможность сохранять промежуточные результаты
            </Typography>
          </li>
          <li>...</li>
        </ul>

        <Stack direction="row" justifyContent="center" spacing={2}>
          <IconButton size="large">
            <YandexIdLogo />
          </IconButton>
          <IconButton size="large">
            <VkIdLogo />
          </IconButton>

          <IconButton size="large">
            <GoogleIdLogo />
          </IconButton>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default Auth;
