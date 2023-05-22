import css from "./Statistics.module.css"
import PropTypes from "prop-types";


export const Statistics =({data})=>(
<section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>

  <ul className={css["stat-list"]}>

  {data.map(stat=>(
    <li className={css.item} id={css[stat.id]}>
    <span className={css.label}>{stat.label}</span>
    <span className={css.percentage}>{stat.percentage}%</span>
  </li>
  ))}

  </ul>
</section>);

Statistics.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
}