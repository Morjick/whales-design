<template>
  <div class="footer">
    <div class="form_footer">
      <div class="foot">
        <div id="mailFooter" class="form_footer_inner">
          <div class="form_desc">
            <div class="form_title">Обсудить проект</div>
            <div class="form_slog">
              Крутые проекты начинаются с заполнения этой формы
            </div>
            <img
              src="@/assets/footer-mail-img.png"
              alt=""
              class="footer_form_img"
            />
          </div>

          <div class="footer_form">
            <div class="footer_form_block">
              <label>
                <p>Ваше имя*</p>
                <input
                  class="full_input"
                  type="text"
                  placeholder="введите ваше имя"
                />
              </label>
            </div>
            <div class="footer_form_block">
              <label>
                <p>Телефон*</p>
                <input
                  class="full_input"
                  type="text"
                  placeholder="введите номер телефона"
                />
              </label>
              <label>
                <p>Email*</p>
                <input
                  class="full_input"
                  type="text"
                  placeholder="введите электронный адрес"
                />
              </label>
            </div>
            <div class="footer_form_block">
              <label>
                <p>Сообщение*</p>
                <input
                  class="full_input"
                  type="text"
                  placeholder="введите сообщение"
                />
              </label>
            </div>
            <div class="send_form_footer">
              <button class="suppport-btn">Отправить</button>
              <label class="send_form_checkbox checkbox">
                <input type="checkbox" />
                <div class="checkbox_form_footer"></div>
                <p class="send_form_check">
                  Согласие на обработку персональных данных
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info_footer">
      <div class="info_footer_inner">
        <div class="whales_block">
          <div class="logo_footer footer">
            <img src="@/assets/logo-light.png" alt="" />
          </div>
          <div class="footer_social">
            <div class="footer_social_item">
              <img src="@/assets/instagram.png" alt="" />
            </div>
            <div class="footer_social_item">
              <img src="@/assets/behance.png" alt="" />
            </div>
            <div class="footer_social_item">
              <img src="@/assets/dribbble.png" alt="" />
            </div>
          </div>
        </div>
        <div class="footer_navigation">
          <div class="brifs footer_nav">
            <div class="brifs_inner footer_nav_inner">
              <div class="footer_title">Брифы</div>
              <ul class="menu_footer">
                <li class="menu_footer_item">
                  <router-link to="/brifs/web">Бриф на разработку веб дизайна</router-link>
                </li>
                <li class="menu_footer_item">
                  <router-link to="/brifs/aidantice">Бриф на разработку айдентики</router-link>
                </li>
                <li class="menu_footer_item">
                  <router-link to="/brifs/presentation">Бриф на разработку призентации</router-link>
                </li>
                <li class="menu_footer_item">
                  <router-link to="/brifs/logotype">Бриф на разработку логотипа</router-link>
                </li>
                <li class="menu_footer_item">
                  <router-link to="/brifs/image">Бриф на разработку иллюстрации</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer_nav">
            <div class="footer_nav_inner">
              <div class="footer_title">О нас</div>
              <ul class="menu_footer">
                <li class="menu_footer_item">
                  <router-link to="/portfolio">Портфолио</router-link>
                </li>
                <li class="menu_footer_item">
                  <router-link to="services">Услуги и цены</router-link>
                </li>
                <li class="menu_footer_item">
                  <router-link to="/about">Мы</router-link>
                </li>
                <li class="menu_footer_item">
                  <router-link to="/contact">Контакты</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer_nav">
            <div class="footer_title">
              <div class="footer_inner_title">Контакты</div>
              <ul class="menu_footer">
                <li class="menu_footer_item">
                  <a target="_blank" href="mailto:hello@whalesagency.com">hello@whalesagency.com</a>
                </li>
                <li class="menu_footer_item">
                  <a href="callto:+38 (098) 888 10 08">+38 (098) 888 10 08</a>
                </li>
                <li class="menu_footer_item">
                  <a href="callto:+38 (063) 333 10 33">+38 (063) 333 10 33</a>
                </li>
                <div class="footer_social_items">
                  <div class="footer_social_item">
                    <img src="@/assets/telegram.png" alt="" />
                  </div>
                  <div class="footer_social_item">
                    <img src="@/assets/viber.png" alt="" />
                  </div>
                  <div class="footer_social_item">
                    <img src="@/assets/whatsapp.png" alt="" />
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>