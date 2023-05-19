import css from "./statistics.module.css"
import PropTypes from "prop-types";


export const Statistics =({data})=>(
<section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>

  <ul className={css["stat-list"]}>

  {data.map(stat=>(
    <li className={css.item}>
    <span className={css.label}>{stat.label}</span>
    <span className={css.percentage}>{stat.percentage}%</span>
  </li>
  ))}

  </ul>
</section>);

Statistics.propTypes = {data: PropTypes.array.isRequired};