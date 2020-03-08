import React from 'react';

class Startseite extends React.Component {
  render() {
      return(
        <div>
        <h1>NOT A GAME </h1>
        <p> Du heißt Marlé, bist 23 Jahre alt und weiblich. Du kommst aus einem Land namens
        Jewos.
        Du gehörst der akademischen Mittelschicht an und wohnst gemeinsam mit deinem
        Partner, eurem 2jährigen Sohn und deinen Eltern in einem Haus.
        </p>
        <p>
        In Jewos herrscht seit langer Zeit Krieg und damit Hunger und Armut. Vor kurzem
        hat sich die Situtation deutlich verschärft und du möchtest nicht, dass
        dein Kind in einer solchen Umgebung aufwächst. Deshalb überlegst du, zu fliehen.
        Du weißt, dass eine Flucht sehr viele Risiken mit sich bringt, trotzdem
        entscheidest du dich gemeinsam mit deiner Familie dafür.
        </p>
        <button type="button" onClick={this.props.handler}> Weiter</button>
        </div>
      )
    }
}

export default Startseite;
