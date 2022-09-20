import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCovid, getCovidData } from '../Features/CovidCaseSlices';


function CovidCase() {
  const covid = useSelector(selectCovid);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidData())
  }, [dispatch, getCovidData])

  return (
    <section className="covid-case">
      <div className="flex-container">
        <div className="flex-items">
          <p className="ph">Philippines</p>
        </div>
        <div className="flex-items">
          <p className="title">Active cases</p>
          <p className="number-cases active">{ covid.data.data === undefined ? covid.status : covid.data.data.active_cases }</p>
       </div>
        <div className="flex-items">
          <p className="title">Death</p>
          <p className="number-cases deaths">{ covid.data.data === undefined ? covid.status : covid.data.data.deaths }</p>
        </div>
        <div className="flex-items">
          <p className="title">Recoveries</p>
          <p className="number-cases recovered">{ covid.data.data === undefined ? covid.status : covid.data.data.recoveries }</p>
        </div>
        <div className="flex-items">
          <p className="title">Fatality rate</p>
          <p className="number-cases recovered">{ covid.data.data === undefined ? covid.status : covid.data.data.fatality_rate + '%' }</p>
        </div>
        <div className="flex-items">
          <p className="title">Recovery rate</p>
          <p className="number-cases recovered">{ covid.data.data === undefined ? covid.status : covid.data.data.recovery_rate + '%' }</p>
        </div>
        <div className="flex-items">
          <p className="title">Total</p>
          <p className="number-cases recovered">{ covid.data.data === undefined ? covid.status : covid.data.data.total }</p>
        </div>
      </div>
    </section>
  );
}

export default CovidCase;