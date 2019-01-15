<template>
  <div class="about">
    <mu-button @click="open = true" color="primary">Open Menu</mu-button>
    <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'" :width="350">
      <div class="outlook-drawer" style="height: 100vh">
        <div class="account-bar"></div>
        <div>
          <div class="menu-header">
            <p>Outlook.com</p>
            <p>xinyan.zhang@live.com</p>
          </div>
          <div class="menu-content">
            <mu-list>
              <mu-list-item v-for="(fav, index) in this.favourites" :key="'favourite'+index" button>
                <mu-list-item-action>
                  <mu-icon value="inbox"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>{{fav.name}}</mu-list-item-title>
              </mu-list-item>
            </mu-list>
            <mu-divider shallow-inset></mu-divider>
            <mu-list>
              <mu-list-item v-for="folder in this.folders" :key="'folder'+index" button>
                <mu-list-item-action>
                  <mu-icon value=folder.icon></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>{{folder.name}}</mu-list-item-title>
              </mu-list-item>
            </mu-list>
          </div>
        </div>
      </div>
    </mu-drawer>
  </div>
</template>
<script>
  export default {
      data() {
          return {
              docked:false,
              open: false,
              position: 'left',
              favourites:[{
                  name:"收件箱",
                  icon:"inbox"
              }],
              folders:[{
                  name:"收件箱",
                  icon:"inbox"
              }, {
                  name:"已发送邮件",
                  icon:"sent"
              }, {
                  name:"存档",
                  icon:"grade"
              }, {
                  name:"已删除邮件",
                  icon:"inbox"
              }, {
                  name:"草稿",
                  icon:"drafts"
              }, {
                  name:"垃圾邮件",
                  icon:"grade"
              }, {
                  name:"重要邮件箱",
                  icon:"grade"
              }, {
                  name:"Conversation History",
                  icon:"grade"
              }]
          }
      }
  }
</script>
<style>
  .outlook-drawer {
    position: relative;
  }
  .account-bar {
    width: 64px;
    height: 100%;
    background: #DDD;
  }

  .menu-header {
    position: absolute;
    top: 0;
    left: 64px;
    right: 0;
    height: 80px;
    border-bottom: #DDD solid 1px;
  }

  .menu-content {
    position: absolute;
    top: 80px;
    left: 64px;
    right: 0;
    bottom: 0;
    overflow:auto;
    overflow-x: hidden;
  }

  .menu-header > p {
    line-height: 1.2;
    margin: 0 12px;
    text-align: left;
  }

  .menu-header > p:first-of-type {
    font-size: 16px;
    font-weight: bold;
    margin-top: 30px;
  }

  .menu-header > p:last-of-type {
    font-size: 14px;
  }

</style>