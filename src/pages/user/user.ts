import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController, ToastController
  , LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BaseUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest';

// @IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage extends BaseUI {

  headface: string = 'http://img.mukewang.com/user/57a322f00001e4ae02560256-40-40.jpg?';
  nickname: string = '加载中...';
  errorMessage: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public loadCtrl: LoadingController,
    public rest: RestProvider,
    public toastCtrl: ToastController,
    public storage: Storage) {
    super();
  }

  ionViewDidEnter() {
    this.loadUserPage();
  }

  loadUserPage() {
    this.storage.get('UserId').then((val) => {
      if (val != null) {
        // 加载用户数据
        const loading = super.showLoading(this.loadCtrl, '加载中...');
        this.rest.getUserInfo(val)
          .subscribe(
          userinfo => {
            this.nickname = userinfo['UserNickName'];
            this.headface = userinfo['UserHeadface'] + '?' + (new Date()).valueOf();
            loading.dismiss();
          },
          error => this.errorMessage = <any>error);
      }
    });
  }

  updateNickName() {
    this.storage.get('UserId').then((val) => {
      if (val != null) {
        const loading = super.showLoading(this.loadCtrl, '修改中...');
        this.rest.updateNickName(val, this.nickname)
          .subscribe(
          f => {
            if (f['Status'] == 'OK') {
              loading.dismiss();
              super.showToast(this.toastCtrl, '昵称修改成功。');
            } else {
              loading.dismiss();
              super.showToast(this.toastCtrl, f['StatusContent']);
            }
          },
          error => this.errorMessage = <any>error);
      }
    });
  }

  logout() {
    this.storage.remove('UserId');
    this.viewCtrl.dismiss();
  }

  gotoHeadface() {
    // this.navCtrl.push(HeadfacePage);
  }

  /**
   * 关闭当前页面的方法
   *
   * @memberof LoginPage
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
