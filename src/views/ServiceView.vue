<template>
  <div class="container">
    <div class="head-text">В нашей компании вы можете получить различные виды ТО: </div>
      <table border="5" width="500">
        <thead>
        <th>Автопогрузчик/грузоподъемность</th>
        <th>ТО малое</th>
        <th>ТО среднее</th>
        <th>ТО большое</th>
        </thead>
        <tbody>
          <tr>
            <td>1500 кг</td>
            <td>13000 руб</td>
            <td>15000 руб</td>
            <td>35000 руб</td>
          </tr>
          <tr>
            <td>3500 кг</td>
            <td>13500 руб</td>
            <td>15500 руб</td>
            <td>40000 руб</td>
          </tr>
          <tr>
            <td>Электроштабелер</td>
            <td>6000 руб</td>
            <td></td>
            <td>10000 руб</td>
          </tr>
          <tr>
            <td>Электропогрузчик/Ричтрак</td>
            <td>7000 руб</td>
            <td></td>
            <td>15000 руб</td>
          </tr>
        </tbody>
      </table>
      <br><br>
  </div>

  <div class="text_container">
    <p>Комплекс работ входящих в малое ТО:</p>
    <ul>
      <li></li>
      <li></li>
    </ul>
    <p>Комплекс работ входящих в среднее ТО:</p>
    <ul>
      <li></li>
      <li></li>
    </ul>
    <p>Комплекс работ входящих в большое ТО:</p>
    <ul>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
table {
   border: 3px solid rgb(255, 0, 0);
   width:1000px;
   height: auto;
}
/* границы ячеек первого ряда таблицы */
th {
   border: 3px solid rgb(255, 0, 0);
}
/* границы ячеек тела таблицы */
td {
   border: 1px solid rgb(255, 0, 0);
}
.text_container {
 font-size:26px;
 margin-left:40px;
}
</style>