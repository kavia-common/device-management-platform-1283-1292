import { Component, inject, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * DeviceSearchComponent presents a user-friendly Device Search / Assurance & Diagnostics interface.
 * Implements a clean 3-column layout with a sticky header, context bar, and responsive behavior.
 * This component is standalone and uses Angular Signals for simple UI state (e.g., selected journey item).
 */
@Component({
  selector: 'app-device-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './device-search.component.html',
  styleUrl: './device-search.component.css',
})
export class DeviceSearchComponent {
  private readonly location = inject(Location);

  // Mock data for the UI; in future iterations, replace with services to fetch from backend.
  searchQuery = signal<string>('');
  device = {
    name: 'iCX Router X200',
    id: 'TS 120 7184 620 888',
    model: 'X200-5G',
    serial: 'SN-29AF-9923',
    location: 'Austin, TX',
    assignedUser: 'Matthew Johnson',
    warranty: 'Valid until 2026-12-31',
    lastOnline: '2 hours ago',
    statuses: [
      { label: 'Active', color: 'var(--success)' },
      { label: 'Online', color: 'var(--success)' },
      { label: 'Firmware v2.3.1', color: 'var(--accent)' },
    ],
  };

  // Journey lists
  assuranceList = ['Network Assurance', 'VoIP Service', 'Config & Security'];
  diagnosticsList = [
    'WiFi Diagnostic Testing & Diagnostics',
    'WAN/LAN Connectivity',
    'Throughput Benchmark',
    'Packet Loss & Latency',
  ];
  toolsList = ['Setup Wizard', 'System Logs', 'Advanced Tools'];

  // Selected states
  selectedAssurance = signal<string | null>(null);
  selectedDiagnostic = signal<string>('WiFi Diagnostic Testing & Diagnostics');
  selectedTool = signal<string | null>(null);

  // Form model
  formModel = {
    configProfile: 'Default',
    ssid: '',
    password: '',
    band: 'Dual (2.4 + 5 GHz)',
    channel: 'Auto',
  };

  // PUBLIC_INTERFACE
  startTest(): void {
    /** Triggers the diagnostics test with selected configuration. */
    // Placeholder for future service integration; currently logs details to console.
    // eslint-disable-next-line no-console
    console.log('Starting diagnostics with configuration', {
      journey: this.selectedDiagnostic(),
      profile: this.formModel.configProfile,
      ssid: this.formModel.ssid,
      band: this.formModel.band,
      channel: this.formModel.channel,
    });
  }

  // PUBLIC_INTERFACE
  goBack(): void {
    /** Navigate back in history to prior list/search context. */
    this.location.back();
  }

  // PUBLIC_INTERFACE
  clearSearch(): void {
    /** Clears the global search input. */
    this.searchQuery.set('');
  }

  // PUBLIC_INTERFACE
  onGlobalSearchInput(value: string): void {
    /** Handles input change for the global search box. */
    this.searchQuery.set(value ?? '');
  }

  // PUBLIC_INTERFACE
  onSelectAssurance(item: string): void {
    /** Select an Assurance item (visual only for now). */
    this.selectedAssurance.set(item);
  }

  // PUBLIC_INTERFACE
  onSelectDiagnostic(item: string): void {
    /** Select a Diagnostics item to be highlighted and used by Start Test. */
    this.selectedDiagnostic.set(item);
  }

  // PUBLIC_INTERFACE
  onSelectTool(item: string): void {
    /** Select a Tool item (visual only for now). */
    this.selectedTool.set(item);
  }
}
