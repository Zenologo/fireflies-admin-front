<script setup lang="ts">
import { computed, ref } from 'vue';
import { useAppStore } from '@/store/modules/app';
import { launchChat } from '@/utils/chat';
import HeaderBanner from './modules/header-banner.vue';
import CardData from './modules/card-data.vue';
import LineChart from './modules/line-chart.vue';
import PieChart from './modules/pie-chart.vue';
import ProjectNews from './modules/project-news.vue';
import CreativityBanner from './modules/creativity-banner.vue';

const appStore = useAppStore();

const gap = computed(() => (appStore.isMobile ? 0 : 16));

const message = ref('Welcome to Home Page');
launchChat();
</script>

<!--
 <script type="text/javascript">
function initEmbeddedMessaging() {
  try {
    embeddedservice_bootstrap.settings.language = 'fr'; // For example, enter 'en' or 'en-US'

    embeddedservice_bootstrap.init(
      '00DAa00000DW4fJ',
      'CEE_B2B2C',
      'https://crmsiplec--int.sandbox.my.site.com/ESWCEEB2B2C1746022109468',
      {
        scrt2URL: 'https://crmsiplec--int.sandbox.my.salesforce-scrt.com'
      }
    );
  } catch (err) {
    console.error('Error loading Embedded Messaging: ', err);
  }
}
</script>
-->

<!--
 <script
  type="text/javascript"
  src="https://crmsiplec--int.sandbox.my.site.com/ESWCEEB2B2C1746022109468/assets/js/bootstrap.min.js"
  onload="initEmbeddedMessaging()"
></script>
-->

<template>
  <NSpace vertical :size="16">
    <NAlert :title="$t('common.warning')" type="warning">
      {{ $t('page.home.branchDesc') }}
    </NAlert>
    <HeaderBanner />
    <CardData />
    <NGrid :x-gap="gap" :y-gap="16" responsive="screen" item-responsive>
      <NGi span="24 s:24 m:14">
        <NCard :bordered="false" class="card-wrapper">
          <LineChart />
        </NCard>
      </NGi>
      <NGi span="24 s:24 m:10">
        <NCard :bordered="false" class="card-wrapper">
          <PieChart />
        </NCard>
      </NGi>
    </NGrid>
    <NGrid :x-gap="gap" :y-gap="16" responsive="screen" item-responsive>
      <NGi span="24 s:24 m:14">
        <ProjectNews />
      </NGi>
      <NGi span="24 s:24 m:10">
        <CreativityBanner />
      </NGi>
    </NGrid>
  </NSpace>
  {{ message }}
</template>

<style scoped></style>
