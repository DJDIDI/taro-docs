/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from '@docusaurus/Link'
import { useLocation } from '@docusaurus/router'
import Translate from '@docusaurus/Translate'
import React from 'react'

import AffixContact from '../components/affix-contact'

function Footer () {
  const { pathname = '' } = useLocation()
  return (
    <>
      {pathname && pathname.indexOf('/communicate') < 0 && <AffixContact />}
      <footer className="footer" id="footer">
        <div className="grid_c1 footer_cont">
          <div className="footer_logo_container">
            <div className="footer_logo" />
            <span className="footer_designedby" />
          </div>
          <div className="footer_link_container">
            <div className="footer_link">
              <h3 className="footer_link_tit footer_link_tit1">
                <Translate description="The homepage main heading">
                相关资源
                </Translate>
              </h3>
              <p>
                <Link to="https://taro.jd.com/">Taro</Link>
              </p>
              <p>
                <Link to="https://taro-ui.jd.com/">Taro UI</Link>
              </p>
              <p>
                <Link to="https://at-ui.github.io/at-ui/#/zh">At-UI</Link>
              </p>
              <p>
                <Link to="https://nerv.aotu.io/">Nerv</Link>
              </p>
              <p>
                <Link to="https://athena.aotu.io/">Athena</Link>
              </p>
            </div>
            <div className="footer_link">
              <h3 className="footer_link_tit footer_link_tit2">
                <Translate description="The footer content">
                社区
                </Translate>
              </h3>
              <p>
                <Link to="https://github.com/NervJS/taro/issues">GitHub</Link>
              </p>
              <p>
                <Link to="https://taro-club.jd.com">Taro BBS</Link>
              </p>
              <p className="footer_link_connect_wrap">
                <span className="footer_link_connect footer_link_wechat">
                  <Translate description="The footer content">
                 微信
                  </Translate>
                  <span className="wechat_qrcode_icon">
                    <svg
                      className="icon svgicon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="https://www.w3.org/2000/svg"
                      data-spm-anchor-id="a313x.7781069.0.i0"
                    >
                      <path
                        d="M240.071 241.095h59.278v59.278h-59.278v-59.278z"
                        fill=""
                      />
                      <path
                        d="M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z"
                        fill=""
                      />
                      <path
                        d="M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z"
                        fill=""
                      />
                      <path
                        d="M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z"
                        fill=""
                      />
                    </svg>
                  </span>
                </span>
                <span className="footer_link_wechat_img">
                  <img src="https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67" />
                </span>
              </p>
            </div>
            <div className="footer_link">
              <h3 className="footer_link_tit footer_link_tit3">
                <Translate description="The footer content">
                关于我们
                </Translate>
              </h3>
              <p>
                <Link to="https://aotu.io/">
                  <Translate description="The footer content">
                  凹凸实验室
                  </Translate>
                </Link>
              </p>
              <p>
                <Link to="https://aotu.io/join/">
                  <Translate description="The footer content">
                  加入我们
                  </Translate>
                </Link>
              </p>
              <p>
                <Link to="mailto:taro@jd.com?subject=【Taro 合作】合作标题">
                  <Translate description="The footer content">
                  联系我们
                  </Translate>
                </Link>
              </p>
            </div>
            <div className="footer_link">
              <h3 className="footer_link_tit footer_link_tit4">
                <Translate description="The footer content">
                感谢
                </Translate>
              </h3>
              <p>
                <Link to="https://jdc.jd.com/">
                  <Translate description="The footer content">
                  用户体验设计部
                  </Translate>
                </Link>
              </p>
              <p>
                <Link to="/docs/team/role-committer">
                  <Translate description="The footer content">
                  Taro 贡献者们
                  </Translate>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="in">
          Copyright © {new Date().getFullYear()}. All Rights Reserved. 粤ICP备15077732号-2
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
