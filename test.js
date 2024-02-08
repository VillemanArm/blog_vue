function formatDuration(seconds = 0) {
  if (!seconds) return 'now'
  
  let time = ''
  const timeUnits = ['minute', 'hour', 'day']
  const timeUnitsAmount = [60, 24, 365]
  let currentTimeUnitAmount = seconds
  
  function addTimeUnit(value, timeUnit) {
    let newTimeUnit = ''
    if (value > 0) newTimeUnit = `${value} ${timeUnit}${value > 1 ? 's' : ''} `
    time = newTimeUnit + time
  }
  const secondsAmount = currentTimeUnitAmount % 60 
  currentTimeUnitAmount = Math.floor(currentTimeUnitAmount / 60)
  addTimeUnit(secondsAmount, 'second')

  timeUnits.forEach((unit, i) => {
    const unitAmount = currentTimeUnitAmount % timeUnitsAmount[i]
    addTimeUnit(unitAmount,unit)
    currentTimeUnitAmount = Math.floor(currentTimeUnitAmount / timeUnitsAmount[i])
  })

  addTimeUnit(currentTimeUnitAmount, 'year')
  console.log(time)

  const lastCommaIndex = time.lastIndexOf(',')
  if (lastCommaIndex > 0) time = time.slice(0, lastCommaIndex) + ' and' + time.slice( lastCommaIndex + 1)

  return  time
}

console.log( formatDuration(111) )

// console.log('9 days, 2 hours and 25 minutes'.length)

