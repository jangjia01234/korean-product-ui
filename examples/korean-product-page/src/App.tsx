import { useState } from 'react'
import {
  ProductButton,
  ProductPanel,
  ProductPanelHeader,
  ProductStatusBadge,
} from 'korean-product-ui'

type ExampleView = 'landing' | 'dashboard'

const workRows = [
  ['홈 화면 정리', '김민지', '오늘', '진행 중'],
  ['알림 문구 확인', '이준호', '오늘', '확인 필요'],
  ['팀 권한 설정', '박서연', '내일', '완료'],
]

export function App() {
  const [view, setView] = useState<ExampleView>('landing')

  if (view === 'dashboard') {
    return (
      <main className="demo-shell">
        <aside className="demo-nav" aria-label="어드민 메뉴">
          <strong>Product UI</strong>
          <nav>
            <button aria-current="page" type="button">
              대시보드
            </button>
            <button type="button">
              작업
            </button>
            <button type="button">
              리포트
            </button>
            <button type="button" onClick={() => setView('landing')}>
              랜딩으로 돌아가기
            </button>
          </nav>
        </aside>
        <DashboardExample />
      </main>
    )
  }

  return (
    <main className="landing-shell">
      <LandingExample onAdminClick={() => setView('dashboard')} />
    </main>
  )
}

function LandingExample({ onAdminClick }: { onAdminClick: () => void }) {
  return (
    <section className="demo-page demo-landing-page">
      <nav className="landing-nav" aria-label="랜딩 메뉴">
        <span className="brand-lockup">
          <img src="/brand-mark.svg" alt="" />
          <strong>Product UI</strong>
        </span>
        <div className="landing-nav-links" aria-label="주요 링크">
          <span>시작하기</span>
          <span>컴포넌트</span>
          <span>예시</span>
          <span>가이드</span>
        </div>
        <ProductButton variant="secondary" onClick={onAdminClick}>
          어드민으로 전환
        </ProductButton>
      </nav>

      <header className="landing-hero">
        <div className="landing-copy">
          <h1>
            보기 쉬운
            <br />
            한국어 서비스 UI
          </h1>
          <p>버튼, 패널, 상태 배지를 조합해 제품 화면을 더 간결하게 만드세요.</p>
          <div className="landing-actions">
            <ProductButton size="lg">시작하기</ProductButton>
            <ProductButton size="lg" variant="secondary">컴포넌트 보기</ProductButton>
          </div>
        </div>

        <img
          className="landing-mockup-image"
          src="/ai/hero-devices.png"
          alt="태블릿과 휴대폰에 표시된 한국어 서비스 UI 예시"
        />
      </header>

      <section className="landing-band landing-band-white">
        <div className="landing-product-section">
          <div className="section-copy">
            <h2>한국어 화면에 맞춘 기본 요소</h2>
            <p>문장 길이, 상태 표현, 버튼 높이를 한국어 서비스 화면에 맞춰 차분하게 정리했습니다.</p>
            <div className="section-points">
              <span>짧은 라벨</span>
              <span>명확한 상태</span>
              <span>넉넉한 행 간격</span>
            </div>
          </div>
          <img
            className="section-mockup-image"
            src="/ai/dashboard-section.png"
            alt="대시보드 형태의 한국어 서비스 UI 목업"
          />
        </div>
      </section>

      <section className="landing-band landing-band-soft">
        <div className="landing-product-section landing-product-section-reverse">
          <img
            className="section-mockup-image section-mockup-phone"
            src="/ai/mobile-section.png"
            alt="휴대폰에 표시된 한국어 서비스 UI 목업"
          />
          <div className="section-copy">
            <h2>작은 화면에서도 읽기 쉽게</h2>
            <p>모바일 화면에서는 정보량을 줄이고, 오늘 확인할 일과 다음 액션이 먼저 보이도록 구성합니다.</p>
            <div className="section-points">
              <span>큰 제목</span>
              <span>짧은 설명</span>
              <span>분명한 액션</span>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-band landing-band-blue">
        <div className="landing-showcase-section">
          <div className="section-heading">
            <h2>필요한 화면을 같은 톤으로</h2>
            <p>랜딩, 어드민, 설정 화면이 따로 놀지 않도록 같은 색과 간격, 같은 문장 톤으로 이어집니다.</p>
          </div>
          <div className="showcase-grid">
            <ProductPanel className="showcase-card" tone="outlined" elevation="raised">
              <img src="/ai/showcase-landing.png" alt="" />
              <ProductPanelHeader
                eyebrow="랜딩"
                title="간결한 첫 화면"
                description="큰 제목, 짧은 설명, 명확한 버튼으로 시작합니다."
              />
              <ProductButton variant="secondary">보기</ProductButton>
            </ProductPanel>
            <ProductPanel className="showcase-card" tone="outlined">
              <img src="/ai/showcase-admin.png" alt="" />
              <ProductPanelHeader
                eyebrow="어드민"
                title="상태 중심 대시보드"
                description="숫자와 목록을 차분한 밀도로 보여줍니다."
              />
              <ProductButton variant="secondary" onClick={onAdminClick}>어드민 열기</ProductButton>
            </ProductPanel>
            <ProductPanel className="showcase-card" tone="outlined">
              <img src="/ai/showcase-settings.png" alt="" />
              <ProductPanelHeader
                eyebrow="설정"
                title="읽기 쉬운 옵션"
                description="선택 상태와 설명을 한 화면에 정리합니다."
              />
              <ProductButton variant="secondary">옵션 보기</ProductButton>
            </ProductPanel>
          </div>
        </div>
      </section>

      <section className="landing-band landing-band-white">
        <section className="landing-cta-section">
          <div>
            <h2>차분한 한국어 UI를 바로 시작하세요</h2>
            <p>필요한 컴포넌트만 골라 제품 화면 안에서 자연스럽게 조합할 수 있습니다.</p>
          </div>
          <div className="landing-actions">
            <ProductButton size="lg">시작하기</ProductButton>
            <ProductButton size="lg" variant="secondary" onClick={onAdminClick}>
              어드민 예시 보기
            </ProductButton>
          </div>
        </section>
      </section>

      <section className="landing-footer-band">
        <footer className="landing-footer">
          <div className="footer-columns">
            <div>
              <strong>안내</strong>
              <span>공지사항</span>
              <span>자주 묻는 질문</span>
              <span>업데이트 내역</span>
            </div>
            <div>
              <strong>팀</strong>
              <span>회사소개</span>
              <span>블로그</span>
              <span>채용</span>
            </div>
            <div>
              <strong>고객센터</strong>
              <span>운영시간: 평일 09:00 - 18:00</span>
              <span>전화: 1544-0000</span>
              <span>이메일: support@example.com</span>
              <span>문의 바로가기</span>
            </div>
            <div>
              <strong>운영정책</strong>
              <span>상담/신고</span>
              <span>서비스 상태</span>
            </div>
          </div>

          <div className="footer-company">
            <strong>Copyright © Product UI. All Rights Reserved</strong>
            <p>
              사업자등록번호: 000-00-00000 | 대표: 홍길동<br />
              통신판매업 신고번호: 제0000-서울강남-00000호 | 서울특별시 강남구 테헤란로 000
            </p>
          </div>

          <div className="footer-terms">
            <strong>Product UI 기본약관</strong>
            <nav aria-label="약관 링크">
              <span>서비스 이용약관</span>
              <span>개인정보 처리방침</span>
              <span>취약점 신고 정책</span>
              <span>이용자 유의사항</span>
            </nav>
          </div>

          <div className="footer-socials" aria-label="소셜 링크">
            <span>Talk</span>
            <span>N</span>
            <span>◎</span>
          </div>
        </footer>
      </section>
      <button className="chat-fab" type="button" aria-label="상담 열기">
        <img src="/ai/chat-avatar.png" alt="" />
      </button>
    </section>
  )
}

function DashboardExample() {
  return (
    <section className="demo-page">
      <header className="demo-header">
        <div>
          <span>한국어 제품 UI 예시</span>
          <h1>대시보드</h1>
          <p>중요한 상태와 다음 작업을 한눈에 확인하세요.</p>
        </div>
        <ProductButton>새 작업 만들기</ProductButton>
      </header>

      <section className="demo-grid">
        <ProductPanel tone="outlined" elevation="raised">
          <ProductPanelHeader
            eyebrow="오늘 확인"
            title="8개"
            description="새로 들어온 항목이에요."
          />
          <ProductStatusBadge tone="accent">확인 가능</ProductStatusBadge>
        </ProductPanel>

        <ProductPanel tone="muted">
          <ProductPanelHeader
            eyebrow="진행 중"
            title="14개"
            description="담당자가 처리 중이에요."
          />
          <ProductStatusBadge tone="neutral">진행 중</ProductStatusBadge>
        </ProductPanel>

        <ProductPanel tone="outlined">
          <ProductPanelHeader
            eyebrow="완료"
            title="32개"
            description="오늘 완료된 작업이에요."
          />
          <ProductButton variant="secondary">보기</ProductButton>
        </ProductPanel>
      </section>

      <ProductPanel className="demo-table-panel" tone="outlined">
        <ProductPanelHeader
          eyebrow="작업"
          title="최근 작업"
          description="변경된 상태를 확인하세요."
        />
        <table className="demo-table">
          <thead>
            <tr>
              <th>작업</th>
              <th>담당</th>
              <th>마감</th>
              <th>상태</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {workRows.map(([title, owner, due, status]) => (
              <tr key={title}>
                <td>{title}</td>
                <td>{owner}</td>
                <td>{due}</td>
                <td>
                  <ProductStatusBadge tone={status === '확인 필요' ? 'warning' : 'neutral'}>
                    {status}
                  </ProductStatusBadge>
                </td>
                <td>
                  <ProductButton size="sm" variant="secondary">열기</ProductButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ProductPanel>
    </section>
  )
}
