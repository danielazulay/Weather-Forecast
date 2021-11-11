function Block(props){
return(


    <div className='wind'>
    <ul>
  


<li className='date'>{props.date(props.applicable_date)}</li>
<div className='weatherblock'>
<li><img src={props.inonRender(props.weather_state_abbr)} alt="temp"/></li>
<li class='weatherlegend' >{props.weather_state_name}</li>
</div>
<div className='tempblock'>
<li>Max :{Math.floor(props.max_temp)}C</li>
<li>Min :{Math.floor(props.min_temp)}C</li>
</div>
<li className="windSpeed">{Math.floor(props.wind_speed)} mph</li>
<b>Humidity</b>
<li>{Math.floor(props.humidity)}%</li>
<b>visibility</b>
<li>{Number(props.visibility).toFixed(1)}miles</li>
<b>Pressure</b>
<li>{props.air_pressure}mb</li>
</ul>

    </div>

)
}

export default Block