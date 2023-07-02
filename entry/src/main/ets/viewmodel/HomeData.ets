/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const searchSwiper: Resource[] = [
  $r('app.string.swiper_huawei_zhaopin'),
  $r('app.string.swiper_jianshenfangkaiye'),
  $r('app.string.swiper_old_book')
]

const classifyTitle: Resource[] = [
// @ts-ignore
  '推荐',
  // @ts-ignore
  '二手',
  // @ts-ignore
  '活动',
  // @ts-ignore
  '招聘',
  // @ts-ignore
  '表白墙',
  // @ts-ignore
  '赠换',
  // @ts-ignore
  '失物',
]

const swiperImage: Resource[] = [
  $r('app.media.ic_banner01'),
  $r('app.media.ic_banner02'),
  $r('app.media.ic_banner03'),
  $r('app.media.ic_banner04')
]

type ActivityTitleModel = {
  title: Resource,
  desc: Resource
}

const activityTitle: ActivityTitleModel[] = [
  {
    title: $r('app.string.activity_title_all'),
    desc: $r('app.string.activity_title_all_desc')
  },
  {
    title: $r('app.string.activity_title_selected'),
    desc: $r('app.string.activity_title_selected_desc')
  },
  {
    title: $r('app.string.activity_title_new_products'),
    desc: $r('app.string.activity_title_new_products_desc')
  },
  {
    title: $r('app.string.activity_title_affordable'),
    desc: $r('app.string.activity_title_affordable_desc')
  }
]

export { searchSwiper, classifyTitle, swiperImage, activityTitle, ActivityTitleModel }