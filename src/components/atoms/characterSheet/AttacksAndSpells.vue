<template>
  <div class="attacksAndSpells border">
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
        <tr>
          <td><input type="text"></td>
          <td><input type="text"></td>
          <td><input type="text"></td>
        </tr>
      </tbody>
    </table>
    <textarea name="attacksAndSpells" class="spellText"></textarea>
    <label for="attacksAndSpells" class="labelText center-caps">Attacks & Spellcasting</label>
  </div>
</template>

<script>
  export default {
    name: 'AttacksAndSpells'
  }
</script>

<style lang="less" scoped>
  .attacksAndSpells {
    height: 315px;
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
      color: #666;
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
    background-color: transparent;
    border: none;
    display: block;
    height: 165px;
    padding: 10px;
    width: 234px;
  }

  .labelText {
    display: inline-block;
    font-size: 1.2rem;
    width: 100%;
  }
</style>
