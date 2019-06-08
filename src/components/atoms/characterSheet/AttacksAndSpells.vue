<template>
  <div class="attacksAndSpells">
    <table class="table-foo">
      <thead>
        <tr>
          <th>Name</th>
          <th>Atk Bonus</th>
          <th>Damage/Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="text"></td>
          <td><input type="text"></td>
          <td><input type="text"></td>
        </tr>
        <tr>
          <td><input type="text"></td>
          <td><input type="text"></td>
          <td><input type="text"></td>

        </tr>
        <tr>
          <td><input type="text"></td>
          <td><input type="text"></td>
          <td><input type="text"></td>
        </tr>
      </tbody>
    </table>
    <textarea name="attacksAndSpells" class="spellText"></textarea>
    <label for="attacksAndSpells" class="labelText">Attacks & Spellcasting</label>
  </div>
</template>

<script>
  export default {
    name: 'AttacksAndSpells'
  }
</script>

<style lang="less" scoped>
  .attacksAndSpells {
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    height: 285px;
    padding: 10px;
    width: 254px;
  }

  .table-foo {
    width: 100%;
    padding-bottom: 10px;
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;

    & th {
      color: #eee;
    }

    & td {
      background-color: #eee;
      padding: 3px;
      width: 33%;

      & input {
        background-color: #eee;
        border: 0;
        width: 100%;
      }
    }
  }

  .spellText {
    border: none;
    display: block;
    height: 160px;
    padding: 10px;
    resize: none;
    width: 234px;
  }

  .labelText {
    display: inline-block;
    font-size: 1.2rem;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }
</style>
