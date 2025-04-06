
import './App.css'

function App() {

  return (
    <>
    <NewsList> {/* Блок новостей в верхней области */}
      <List>
        <ListMenu>
          {/* меню новостей, список который будет отображаться ниже */}
          <ListMenuItem /> {/* Элемент меню новостей */}
          <Date /> {/* Сегодняшняя дата и время */}
        </ListMenu>
        <ListNews>
          {/* Список новостей */}
          <NewsItem>
            {/* IMG */}
            {/* Текст */}
          </NewsItem>
        </ListNews>
      </List>
      <ExchangeRate>
        {/* курсы валют */}
        <ExchangeItem>
          {/* обозначение валюты */}
          {/* значение */}
          {/* разница с предыдущим значением */}
        </ExchangeItem>
      </ExchangeRate> 
      <Marketing>
        {/* Реклама */}
      </Marketing>
    </NewsList>

    <SearchBlock> {/* Блок поиска, центр страницы */}
      <Logo /> {/* наше лого */}
      <MenuSearch> {/* Меню поиска */}
        <MenuSearchItem /> {/* Элемент меню */}
      </MenuSearch>
      <Search> {/* Сам поиск */}
        <SearchInput /> {/* Поле для ввода текста */}
        <SearchBtn /> {/* Кнопка на начала поиска */}
      </Search>
      <MotivationSearch /> {/* Пара слов мотивации */}
    </SearchBlock>

    <OtherInform> {/* Блок с прочими возможностями сайта, низ */}
      <Marketing>
        {/* Реклама */}
      </Marketing>
      <Weather> {/* Погода */}
        <WeatherTooDay> {/* Погода сегодня */}
          <Icon /> {/* Иконка */}
          <Number /> {/* Цифра в гразусах Цельсия */}
          <DuringTheDay>
            <Morning /> {/* Утром */}
            <Afternoon /> {/* Днём */}
          </DuringTheDay>
        </WeatherTooDay>
      </Weather>

      <Visited> {/* Часто посещают */}
        <VisitItem /> {/* Эоемент + текст */}
        <VisitItem /> 
        <VisitItem /> 
      </Visited>

      <Maps> {/* Карта */}
        <MapsItem /> {/* Элемент, например Расписания */}
      </Maps>

      <TV> {/* TV программа */}
        <TVBtn /> {/* TV кнопка перехода */}
        <TVElement>
          {/* время, название эфира, название канала */}
        </TVElement>
        <TVElement>
          {/* время, название эфира, название канала */}
        </TVElement>
      </TV>

      <Ether> {/* В эфире */}
        <EtherElement>
          {/* иконка, название эфира, название канала */}
        </EtherElement>
      </Ether>
    </OtherInform>
    </>
  )
}

export default App
