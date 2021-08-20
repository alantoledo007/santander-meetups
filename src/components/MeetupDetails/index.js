import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import moment from "moment";
import { getTimeFromDatetime } from "src/core/utils";

export default function MeetupDetails({ meetup, onRegistering }) {
  const getDate = (subtract = 0) => {
    return moment(meetup.datetime, "DD/MM/YYYY HH:mm")
      .subtract(subtract, "days")
      .format("DD [de] MMMM");
  };

  const handleRegistration = () => {
    onRegistering(meetup.id);
  };

  return (
    <>
      {!meetup.registered && (
        <Typography variant="subtitle1" color="secondary">
          Tienes hasta el {getDate(1)} para decidirte
        </Typography>
      )}
      <Card>
        <CardContent>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" component="h1">
                {getDate()}
              </Typography>
              <Typography color="textSecondary">
                {getTimeFromDatetime(meetup.datetime)}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant={!meetup.registered ? "contained" : "text"}
                fullWidth
                color="primary"
                onClick={handleRegistration}
              >
                {meetup.registered ? "Cancelar" : "Confirmar"} asistencia
              </Button>
              <Typography variant="body2" color="textSecondary">
                Al presionar el botón te inscribiras a la meetup
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
