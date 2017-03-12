import moment from 'moment'

export default (field, value) => {
  switch (field) {
    case 'created_at':
      value = moment(value).format('DD/MM/YYYY')
      break
  }
  return value
}
