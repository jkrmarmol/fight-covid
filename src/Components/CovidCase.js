import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCovid, getCovidData } from '../Features/CovidCaseSlices';


function CovidCase() {
  const covid = useSelector(selectCovid);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidData())
  }, [dispatch])

  const dateRender = () => {
    let dateUpdate = covid.data.data === undefined ? covid.status : covid.data.data.covidCaseLastUpdated.updatedAt;
    let time = new Date(dateUpdate).toLocaleTimeString();
    let date = new Date(dateUpdate).toDateString();
    return `${date} - ${time}`;
  }
  

  return (
    <section className="covid-case">
      <div className="flex-container">
        <div className="flex-items">
          <p className="ph">Philippines</p>
        </div>
        <div className="flex-items">
          <p className="title">Active cases</p>
          <p className="number-cases active">{ covid.data.data === undefined ? covid.status : covid.data.data.covidCaseStatus.active }</p>
       </div>
        <div className="flex-items">
          <p className="title">Death</p>
          <p className="number-cases deaths">{ covid.data.data === undefined ? covid.status : covid.data.data.covidCaseStatus.died }</p>
        </div>
        <div className="flex-items">
          <p className="title">Recoveries</p>
          <p className="number-cases recoveries">{ covid.data.data === undefined ? covid.status : covid.data.data.covidCaseStatus.recovered }</p>
        </div>
        <div className="flex-items">
          <p className="title">Critical</p>
          <p className="number-cases critical">{ covid.data.data === undefined ? covid.status : covid.data.data.covidCaseStatus.critical }</p>
        </div>
        <div className="flex-items">
          <p className="title">Mild</p>
          <p className="number-cases mild">{ covid.data.data === undefined ? covid.status : covid.data.data.covidCaseStatus.mild }</p>
        </div>
        <div className="flex-items">
          <p className="title">Asymptomatic</p>
          <p className="number-cases asymptomatic">{ covid.data.data === undefined ? covid.status : covid.data.data.covidCaseStatus.asymptomatic }</p>
        </div>
        <div className="flex-items">
          <p className="title">Repatriate</p>
          <p className="number-cases repatriate">{ covid.data.data === undefined ? covid.status : covid.data.data.covidCaseStatus.repatriate }</p>
        </div>
        <div className="flex-items">
          <p className="title">Severe</p>
          <p className="number-cases severe">{ covid.data.data === undefined ? covid.status : covid.data.data.covidCaseStatus.severe }</p>
        </div>
        <div className="flex-items">
          <p className="title">All</p>
          <p className="number-cases all">{ covid.data.data === undefined ? covid.status : covid.data.data.covidCaseStatus.all }</p>
        </div>
        <div className="flex-items">
          <p className="title">Date Updated</p>
          <p className="number-cases date-updated">{dateRender()}</p>
        </div>
      </div>
    </section>
  );
}

export default CovidCase;